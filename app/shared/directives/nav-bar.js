directiveModule.directive('navBar', function () {
    return {
        template: `
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <!-- Brand/logo -->
    <a class="navbar-brand" href="#">Angular JS CRUD</a>
    
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#/user/list">User List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/user/create">Add User</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/survey">Survey</a>
      </li>
    </ul>
  </nav>
        `
    };
});