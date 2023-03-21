
const types = {
    OFFER: {
        FETCH: {
            ONE_STARTED: 'OFFER|ONE_FETCH_STARTED',
            ONE_FINISHED: 'OFFER|ONE_FETCH_FINISHED',
            ONE_ERROR: 'OFFER|ONE_FETCH_ERROR',
            ONE_FETCH: 'OFFER|ONE_FETCH',
            ALL_STARTED: 'OFFER|ALL_FETCH_STARTED',
            ALL_FINISHED: 'OFFER|ALL_FETCH_FINISHED',
            ALL_ERROR: 'OFFER|ALL_FETCH_ERROR',
            ALL_FETCH: 'OFFER|ALL_FETCH',
            CATEGORY_FETCH_ALL: 'OFFER_CATEGORY|FETCH_ALL',
            CATEGORY_FETCH_ALL_STARTED: 'OFFER_CATEGORY|FETCH_ALL_STARTED',
            CATEGORY_FETCH_ALL_FINISHED: 'OFFER_CATEGORY|FETCH_ALL_FINISHED',
            CATEGORY_FETCH_ALL_ERROR: 'OFFER_CATEGORY|FETCH_ALL_ERROR',
        },
        APPLY: {
            APPLY: 'OFFER|APPLY',
            APPLY_FINISHED: 'OFFER|APPLY_FINISHED',
            APPLY_ERROR: 'OFFER|APPLY_ERROR',
        },
        STORE: {
            STORE: 'OFFER|STORE',
        }
    },
    JOB: {
        STORE: {
            STORE: 'JOB|STORE',
        },
        FETCH: {
            ALL_FETCH: 'JOB|ALL_FETCH',
            ALL_FETCH_ERROR: 'JOB|ALL_FETCH_ERROR',
            ALL_FETCH_FINISHED: 'JOB|ALL_FETCH_FINISHED',
        }
    },
    USER: {
        ME: {
            FETCH: {
                FINISHED: 'USER|ME_FETCH_FINISHED',
                ERROR: 'USER|ME_FETCH_ERROR',
                FETCH: 'USER|ME_FETCH',
            }
        },
        SIGNIN: {
            ERROR: 'USER|SIGNIN_ERROR',
            FINISHED: 'USER|SIGNIN_FINISHED',
            SIGNIN: 'USER|SIGNIN',
        },
        SIGNUP: {
            ERROR: 'USER|SIGNUP_ERROR',
            FINISHED: 'USER|SIGHUP_FINISHED',
            SIGNUP: 'USER|SIGNUP'
        }
    }
}

export default types;
