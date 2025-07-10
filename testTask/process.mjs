const process = (store, order) => {
    const storeCopy = store.map((item) => ({ ...item }));
    const Result = {
        stats: [],
        assignment: [],
        mismatches: 0,
    };

    for (const orderItem of order) {
        let assinedSize;

        if (orderItem.size.length === 1) {
            const size = orderItem.size[0];
            const storeItem = storeCopy.find((item) => item.size === size && item.quantity > 0);

            if (storeItem) {
                assinedSize = size;
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

            const storeItemPreferred = storeCopy.find((item) => item.size === preferredSize && item.quantity);

            if (storeItemPreferred) {
                assinedSize = preferredSize;
                storeItemPreferred.quantity--;
            } else {
                const otherSize = preferredSize === size1 ? size2 : size1;
                const storeItemOther = storeCopy.find((item) => item.size === otherSize && item.quantity);

                if (storeItemOther) {
                    assinedSize = otherSize;
                    storeItemOther.quantity--;
                    Result.mismatches++;
                }
            }
        }

        if (assinedSize) {
            Result.assignment.push({ id: orderItem.id, size: assinedSize });
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

module.exports = process;
