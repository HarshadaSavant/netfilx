export const checkValidData = (emailid,password,fullName) =>
{
    const isemailidValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailid);
    const ispasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isemailidValid) return "Email Id is not valid";
    if(!ispasswordValid) return "Password is not valid";
    
    return null;
}