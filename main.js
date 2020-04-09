chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text === 'greet') {
      alert('hi');
      sendResponse('I greeted the user');
    }
  });