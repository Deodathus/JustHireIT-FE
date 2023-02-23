import {FaGem, FaPhp, FaPython, FaJava, FaServer, FaJs, FaDatabase, FaHashtag, FaUserCheck} from "react-icons/all";

const IconsMap = {
    php: FaPhp,
    python: FaPython,
    ruby: FaGem,
    java: FaJava,
    devops: FaServer,
    javascript: FaJs,
    data: FaDatabase,
    '.net': FaHashtag,
    manager: FaUserCheck
};

function match(category) {
    return IconsMap[category];
}

export default match;
