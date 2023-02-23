import Environment from "../../config/Environment";

export default function () {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.DEV:
            host = 'http://127.0.0.1:8080/'
    }

    return {
        ping: host + 'api/ping',
        fetch: host + 'api/job/{jobId}/jobPost/{jobPostId}',
        fetchAll: host + 'api/jobPost',
        fetchAllJobCategories: host + 'api/job/category'
    };
}

