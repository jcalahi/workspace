function mainDirective() {
    return {
        replace: false,
        template: [
            '<div>This is a text from directive</div>'
        ].join('')
    };
}

module.exports = mainDirective;