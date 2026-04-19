const process = (store, order) => {
    const storeCopy = store.map((item) => ({ ...item }));
    const Result = {
        stats: [],
        assignment: [],
        mismatches: 0,
    };

    const findItemBySize = (entity, size) => {
        return entity.find((item) => item.size === size && item.quantity);
    };

    const getPreferredSizeByComparing = (preferredSize, size1, size2) => {
        return preferredSize === size1 ? size2 : size1;
    };

    for (const orderItem of order) {
        let assignedSize;

        if (orderItem.size.length === 1) {
            const size = orderItem.size[0];
            const storeItem = findItemBySize(storeCopy, size);

            if (storeItem) {
                assignedSize = size;
                storeItem.quantity--;
            }
        } else {
            const [size1, size2] = orderItem.size;
            const masterSize = orderItem.masterSize;
            let preferredSize;

            if (masterSize === "s1") {
                preferredSize = size1;
            } else {
                preferredSize = size2;
            }

            const willCauseConflict = order.slice(order.indexOf(orderItem) + 1).some((nextOrderItem) => {
                return (
                    nextOrderItem.size.includes(preferredSize) &&
                    !nextOrderItem.size.includes(getPreferredSizeByComparing(preferredSize, size1, size2))
                );
            });

            const prefferedItem = findItemBySize(storeCopy, preferredSize);

            if (prefferedItem && !willCauseConflict) {
                assignedSize = preferredSize;
                prefferedItem.quantity--;
            } else {
                const otherSize = getPreferredSizeByComparing(preferredSize, size1, size2);
                const alternativeItem = findItemBySize(storeCopy, otherSize);

                if (alternativeItem) {
                    assignedSize = otherSize;
                    alternativeItem.quantity--;
                    Result.mismatches++;
                }
            }
        }

        if (assignedSize) {
            Result.assignment.push({ id: orderItem.id, size: assignedSize });
        } else {
            return false;
        }
    }

    const assignmentSizes = {};

    for (const assignmentItem of Result.assignment) {
        const size = assignmentItem.size;
        assignmentSizes[size] = (assignmentSizes[size] || 0) + 1;
    }

    for (const size in assignmentSizes) {
        Result.stats.push({ size: parseInt(size), quantity: assignmentSizes[size] });
    }

    Result.stats.sort((a, b) => a.size - b.size);

    return Result;
};

// module.exports = process;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(arr.indexOf(4) + 1).some((item) => item === 6));
