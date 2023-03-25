const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit-3) + "...";
    }
    return text;
}

export default limitText;