document.addEventListener('DOMContentLoaded', function () {
  const noteInput = document.getElementById('noteInput');
  const saveBtn = document.getElementById('saveBtn');
  const noteList = document.getElementById('noteList');

  // Function to render notes
  function renderNotes(notes) {
    noteList.innerHTML = ''; // Clear previous list
    notes.forEach(note => {
      const li = document.createElement('li');
      li.textContent = note;
      noteList.appendChild(li);
    });
  }

  // Load notes on popup open
  chrome.storage.sync.get(['notes'], function (result) {
    const notes = result.notes || [];
    renderNotes(notes);
  });

  // Save new note
  saveBtn.addEventListener('click', function () {
    const note = noteInput.value.trim();
    if (!note) return;

    chrome.storage.sync.get(['notes'], function (result) {
      const notes = result.notes || [];
      notes.push(note); // Add new note
      chrome.storage.sync.set({ notes }, function () {
        noteInput.value = ''; // Clear input
        renderNotes(notes);   // Refresh list
      });
    });
  });
});
