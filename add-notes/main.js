document.getElementById("downloadButton").addEventListener("click", function() {
    // Content for the text file
    const textContent = "This is the content of the text file.";
  
    // Create a Blob containing the text content
    const blob = new Blob([textContent], { type: "text/plain" });
  
    // Create a URL for the Blob
    const blobUrl = URL.createObjectURL(blob);
  
    // Create a link element for downloading
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "myTextFile.txt"; // Set the file name
  
    // Simulate a click on the link to trigger the download
    a.click();
  
    // Clean up: Revoke the Blob URL to release resources
    URL.revokeObjectURL(blobUrl);
  });
  