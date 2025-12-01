export const LoginLocators = {
  username: '#loginusername',
  password: '#loginpassword',
  loginButton: 'button:has-text("Log in")',
  loginLink: '#login2',
  welcomeText: (email: string) => `text=Welcome ${email}`,
};