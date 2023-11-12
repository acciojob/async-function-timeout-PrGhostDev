//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function () {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  if (!textInput || isNaN(delayInput)) {
    alert('Please enter valid text and delay.');
    return;
  }

  const delay = parseInt(delayInput);

  try {
    const result = await delayAndShowText(textInput, delay);
    document.getElementById('output').innerText = result;
  } catch (error) {
    console.error('Error:', error);
  }
});

async function delayAndShowText(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}
