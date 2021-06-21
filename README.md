# LEARN Prework App WIP

#### Application
- Ruby on Rails 6.0.3.5
- Ruby 2.7.0
- React components
- Devise


#### Dependencies
- Reactstrap/Bootstrap
- React-router-dom


#### LEARN Color Scheme
- DARK GREY: `#313133`
- GREEN: `#6FBD73`
- BLACK: `#101820`
- PURPLE: `#A670AF`

WIP:
Forget password - removed from partial
```
<%- if devise_mapping.recoverable? && controller_name != 'passwords' && controller_name != 'registrations' %>
  <%= link_to "Forgot your password?", new_password_path(resource_name) %><br />
<% end %>
```
