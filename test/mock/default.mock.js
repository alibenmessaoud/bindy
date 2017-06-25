export const propertyBinding = {
    keypath: 'user.password',
    type: 'property',
    target: {
        user: {
            private: {
                password: '6GD72GH'
            }
        }
    },
    DOM: `
        <div id="container">
            <p bd-text="user.private.password"></p>
        </div>
    `
}