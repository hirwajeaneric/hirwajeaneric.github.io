function startupStatusManager() {
    let status = document.getElementById('inDevelopment-notice');
    let statusSpace = document.getElementById('status');
    if(status.innerHTML === "Coming soon"){
        statusSpace.style.backgroundColor('green'); 
    } else {
        statusSpace.style.backgroundColor('orange');
    }
}