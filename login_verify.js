// 設計好的使用者資料
const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
]

function loginVerify(userInput) {
  // 比對用戶輸入的資料跟前面準備好的資料是否相同
  return users.find(eachUser.email === userInput.email && eachUser.password === userInput.password)
}

module.exports = loginVerify