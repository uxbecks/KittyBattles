let store = {
    state : {
        profile : '',
        player : {}
    },

    save() {
        if (window && window.localStorage) {
            window.localStorage.setItem('state', JSON.stringify(this.state));
        }
    },
    load() {
        if (window && window.localStorage) {
            let value = window.localStorage.getItem('state');
            if (value) {
                let oldState = JSON.parse(value);

                this.state.profile = oldState.profile;
                this.state.player = oldState.player;
            }
        }
    }
};

store.load();

export default store;