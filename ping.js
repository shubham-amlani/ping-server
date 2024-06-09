import fetch from 'node-fetch';

async function pingServer() {
  const url = "https://stake-mines-backend.onrender.com/api/health";
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log("Server is active");
    } else {
      console.log("Received unexpected status code:", response.status);
    }
  } catch (error) {
    console.log("Error occurred while pinging the server:", error);
  }
}

export default pingServer;
