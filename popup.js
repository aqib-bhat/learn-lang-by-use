document.getElementById("getUsage").addEventListener("click", async () => {
  const inputWord = document.getElementById("word").value;
  const outputWordUsage = document.getElementById("outputUsage");

  outputWordUsage.textContent = "Getting results ...";
  my_session = await ai.languageModel.create({
    systemPrompt:
      "I want to learn new words in the English language. " +
      "For each word I submit, give me examples of using that word in a sentence.",
  });
  let response = await my_session.prompt(inputWord);

  outputWordUsage.textContent = response;
});

document
  .getElementById("checkUsageButton")
  .addEventListener("click", async () => {
    const inputWord = document.getElementById("word").value;
    const inputSentence = document.getElementById("checkUsage").value;
    const outputUsageCheck = document.getElementById("outputUsageCheck");

    outputUsageCheck.textContent = "Getting results ...";
    my_session = await ai.languageModel.create({
      systemPrompt: "Tell me if I am using the word in quotes correctly.",
    });
    let response = await my_session.prompt(
      "Tell me if I am using the word '" +
        inputWord +
        "' correctly:" +
        inputSentence
    );

    outputUsageCheck.textContent = response;
  });
