const myQuery = function(selector) {
    const elements = document.querySelectorAll(selector);

    return {
        html(content) {
            if (content === undefined) {
                throw new Error("Content is undefined");
            }
            elements.forEach((el) => {
                el.innerHTML = content;
            });
            return this;
        },
        css(prop, value) {
            elements.forEach((el) => {
                el.style.setProperty(prop, value);
            });
            return this;
        },
        on(event, callback) {
            elements.forEach((el) => el.addEventListener(event, callback));
            return this;
        }
    }
}

const $ = myQuery('li')
    .html('element')
    .css('color', 'red')
    .on('click', (e) => {
        e.target.style.color = 'black';
    })
