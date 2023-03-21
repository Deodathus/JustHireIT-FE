import Environment from "../../config/Environment";

export default function () {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.DEV:
            host = 'http://127.0.0.1:8080/'
    }

    return {
        ping: host + 'api/ping',
        fetchOffer: host + 'api/job/{jobId}/jobPost/{jobPostId}',
        fetchAllOffers: host + 'api/jobPost',
        fetchAllJobCategories: host + 'api/job/category',
        signin: host + 'api/auth/signin',
        signup: host + 'api/auth/signup',
        fetchMe: host + 'api/auth/me',
        apply: host + 'api/job/{jobId}/jobPost/{jobPostId}',
        storeJob: host + 'api/job',
        fetchJobs: host + 'api/job',
        storeJobPost: host + 'api/job/{jobId}/jobPost',
        fetchSkills: host + 'api/candidate/skill',
    };
}

