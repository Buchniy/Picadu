// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');


const regExpValidEmail =  /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUserName = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const  userAvatarElem = document.querySelector('.user-avatar');

const postWrapper = document.querySelector('.posts');


const listUsers = [
  {
    email: 'buch@gmail.com',
    password: '123',
    displayName: 'Buch'
  },
  {
    email: 'foo@gmail.com',
    password: '9876554',
    displayName: 'Fooo'
  }
];

const setUsers = {
  user: null,
  logIn(email, password, handler){ /*вход*/
    if(!regExpValidEmail.test(email)){
      alert('email не валиден');
      return
    }
    const user = this.getUser(email);

    if(user && user.password === password){
      this.authorizedUser(user);
      handler();
    }else{
      alert('Пользователь с такими данными не найден');
    }

  },
  logOut(handler){ /*выход*/
    this.user = null;
    handler();
  },
  signUp(email, password, handler){ /*регистрация*/
    if(!regExpValidEmail.test(email)){
      alert('email не валиден');
      return
    }
    if(!email.trim() || !password.trim()){
      alert('Ввведите данные');
      return;
    }
    if(!this.getUser(email)){
      const user = {email, password, displayName: email.split('@', 1).join()};/*email.substring(0,email.indexOf('@"))*/
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    }else {
      alert('Пользователь с такием емайл уже зарегестрирован');
    }
  },
  editUser(userName, userPhoto, handler){
    if(userName){
      this.user.displayName = userName;
    }
    if(userPhoto){
      this.user.photo = userPhoto;
    }
    handler();
  },
  getUser(email){
    return listUsers.find((item) => item.email === email)
  },
  authorizedUser(user){
    this.user = user;

  }
};

const  setPosts = {
  allPosts: [
    {
      title: 'Заголовлок поста',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet blanditiis consequatur corporis cum deleniti dicta, dolore enim, esse eum exercitationem expedita fuga inventore itaque minus nostrum nulla odit perferendis, placeat praesentium quam repellendus reprehenderit veniam voluptatem voluptatibus. Beatae debitis deleniti eaque earum eos eum fuga nemo optio repellendus temporibus. Ab alias blanditiis deserunt ducimus ea fugit impedit laborum minima molestiae molestias necessitatibus nemo optio quia, quos recusandae rerum velit voluptatem. Alias autem blanditiis consectetur dolore doloremque doloribus eveniet exercitationem, nostrum officiis quam quis repudiandae suscipit velit. Asperiores earum iste, libero minus nam provident reprehenderit rerum sapiente sed similique voluptate!',
      tags: ['свежее','новое','горячее','мое','случайность'],
      author: 'buch@gmail.com',
      date: '11.11.2020, 20:54:00',
      like: 45,
      comments: 20,

    },
    {
      title: 'Заголовлок поста 2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его',
      tags: ['свежее','новое','горячее','мое','случайность'],
      author: 'foo@gmail.com',
      date: '11.11.2020, 20:54:00',
      like: 30,
      comments: 12
    },
    {
      title: 'Заголовлок поста 3',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его',
      tags: ['свежее','новое','горячее','мое','случайность'],
      author: 'foo@gmail.com',
      date: '11.11.2020, 20:54:00',
      like: 30,
      comments: 12
    }
  ]
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log(user, 'user');
  if(user){
    loginElem.style.display = "none";
    userElem.style.display = "";
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
  }else{
    loginElem.style.display = "";
    userElem.style.display = "none";
  }
};


const showAllPosts = () => {

  let postsHTML = '';
  setPosts.allPosts.forEach(({ title, text, date, author, tags }) => {
const displayName = author.split('@', 1).join();

    postsHTML += `
    <section class="post">
         <div class="post-body">
           <h2 class="post-title">${title}</h2>
           <p class="post-text">${text}</p>
           <div class="tags">
             <a href="#" class="tag">${tags.map()}#свежее</a>
           </div>
         </div>
         <div class="post-footer">
           <div class="post-buttons">
             <button class="post-button likes">
               <svg width="19" height="20" class="icon icon-like">
                 <use xlink:href="img/icons.svg#like"></use>
               </svg>
               <span class="likes-counter">26</span>
             </button>
             <button class="post-button comments">
               <svg width="21" height="21" class="icon icon-comment">
                 <use xlink:href="img/icons.svg#comment"></use>
               </svg>
               <span class="comments-counter">157</span>
             </button>
             <button class="post-button save">
               <svg width="19" height="19" class="icon icon-save">
                 <use xlink:href="img/icons.svg#save"></use>
               </svg>
             </button>
             <button class="post-button share">
               <svg width="17" height="19" class="icon icon-share">
                 <use xlink:href="img/icons.svg#share"></use>
               </svg>
             </button>
           </div>
           <!-- /.post-buttons -->
           <div class="post-author">
             <div class="author-about">
               <a href="#" class="author-username">${displayName}</a>
               <span class="post-time">${date}</span>
             </div>
             <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
           </div>
           <!-- /.post-author -->
         </div>
         <!-- /.post-footer -->
       </section>
      `;
  });
  postWrapper.innerHTML = postsHTML;
};

const init = () => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    setUsers.logIn(emailValue, passwordValue, toggleAuthDom );
    loginForm.reset();
  });


  loginSignup.addEventListener('click', (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });


  exitElem.addEventListener('click', (event) => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });


  editElem.addEventListener('click', (event) => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUserName.value = setUsers.user.displayName;
  });

  editContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    setUsers.editUser(editUserName.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove('visible');
  });
// отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle('visible');
  });
  showAllPosts();
  toggleAuthDom();
};

document.addEventListener('DOMContentLoaded', init);

