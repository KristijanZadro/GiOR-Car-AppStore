export const isLoggedIn = () => {
    let isVerified = true;
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) return false;
    
    return isVerified
}
