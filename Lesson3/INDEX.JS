class SignUp{

     constructor(firstName,lastName,userName,email,passWord){
          this.firstName=firstName;
          this.lastName=lastName;
          this.userName=userName;
          this.email=email;
          this.passWord=passWord;
     }
     inputText(title,name){
          return (
               `<label for="${name}">${title}</label>
               <input type="text" id="${name}" name="${name}" >`
          )
     }
     inputPassword(pwd){
            return(   `<label for="${pwd}">${this.passWord}</label>
               <input type="password" id="${pwd}" name="${pwd}" >`)
     }    
     render(firstName,lastName,userName,email,passWord){
       return(
           this.inputText(this.firstName,firstName) +
          this.inputText(this.lastName,lastName) +
          this.inputText(this.userName,userName) +
          this.inputText(this.email,email) +
          this.inputPassword(passWord) 
       )

     }
     
}
const signUp= new SignUp(`firstName`,`lastName`,`userName`,`email`,`passWord`);

document.getElementById("container").innerHTML = signUp.render()
class SignIn extends SignUp{
     constructor(userName,passWord){
          super(userName,passWord)
          this.userName = userName;
          this.passWord = passWord;
     }
          render() {
               super.render()
               this. renderlogin()
          }
          renderlogin(userName) {
               return(   
                    this.inputText(this.userName,userName) +
                    this.inputPassword(this.passWord) 
               )
          }
     
}
const signIn= new SignIn(`Username`,`Password`)
document.getElementById("container").innerHTML = signIn.renderlogin()

