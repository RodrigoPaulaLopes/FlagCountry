const helper = {
  upperWord: (phrase: string) => {
    const phraseReplace = phrase.replace(/(^\w{1})|(\s+\w{1})/g, (word) =>
      word.toUpperCase(),
    )
    return phraseReplace
  },
}

export default helper
