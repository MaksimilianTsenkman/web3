<template>
    <div id="app">
        <div class="content">
            <div class="contacts">
            <h1>Contact List</h1>
            <ul class="contact-list">
                <li v-for="(contact, index) in contacts" :key="index">
                <span>{{ contact.name }}</span>
                <span>{{ contact.email }}</span>
                <span>{{ contact.phone }}</span>
                </li>
            </ul>
            </div>
        </div>
    </div>
    <footer class="footer">
      <p>Copyright © All Rights Reserved</p>
    </footer>
</template>
  
  <script>
  export default {
    data() {
      return {
        contacts: [
          { name: 'John Doe', email: 'john@example.com', phone: '+1234567890' },
          { name: 'Jane Smith', email: 'jane@example.com', phone: '+1987654321' },
          // Add more contacts as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .contacts {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
  }
  
  .contact-list {
    list-style: none;
    padding: 0;
  }
  
  .contact-list li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  
  span {
    flex: 1;
    margin-right: 10px;
  }
  .copyright {
    display: flex;
    flex-direction: row;
    justify-content:center;
    background-color: #b6b5ba;
}
#app {
    flex-direction: column;
    min-height: 100vh;
  }
  
  .footer {
    background-color: #b6b5ba;
    color: white;
    text-align: center;
    padding: 20px 0;
    width: 100%;
  }
  </style>