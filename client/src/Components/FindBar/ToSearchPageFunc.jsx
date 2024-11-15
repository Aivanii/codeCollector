
const handleKeyPress = (event, url) => {
    if (event.key === 'Enter') {
        handleButtonClick(url);
    }
};

const handleButtonClick = (url) => {
    window.location = url;
};

export { handleKeyPress, handleButtonClick };