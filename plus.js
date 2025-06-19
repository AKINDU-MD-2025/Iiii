<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background-color: #f0f0f0;
    }

    .fab {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: black;
      color: white;
      border: none;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      font-size: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      transition: background-color 0.3s ease;
    }

    .fab:hover {
      background-color: #333;
    }
  </style>
</head>
<body>

<!-- Plus Button -->
<button class="fab" onclick="alert('Plus Clicked!')">+</button>

</body>
</html>
