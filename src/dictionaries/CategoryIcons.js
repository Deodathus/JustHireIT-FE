import {FaPhp, FaPython} from "react-icons/all";

const IconsMap = {
    php: FaPhp,
    python: FaPython
};

function match(category) {
    return IconsMap[category];
}

export default match;
