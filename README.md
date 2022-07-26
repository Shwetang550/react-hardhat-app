# react-hardhat-app
A clean create-react-app template pre-installed with hardhat which makes the process super-easy to develop Decentralised Applications :) 

## Steps to follow

### 1) Create project using the following code 
```
npx create-react-app project_name --template react-hardhat-app
```
(replate the 'project_name' by your project's name)

### 2) cd into the folder ``react-hardhat-app/``
```
cd project_name
```

### 3) Deploy the smart_contract to the ``local-hardhat-node``
``` 
npx hardhat run scripts/deploy.js --network localhost
```

### 4) Run the react-app
```
npm start
```

Done :white_check_mark: