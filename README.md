# NestJS_Auth_Login_Logout

Note - This is NestJS project which have Signup, Login, Profile, Logout functionality, 
also there are random-joke, product-price-category Url.


step1: Make sure your DB is connect on 3600 port.
================================================================
step2: npm i
================================================================
step3: npm run start:dev       //Server is running on port 3000
================================================================
step4: open postman
    -----------------------------------------------------------
    SignUP:
        POST:
            url: http://localhost:3000/api/users/signup/
            Body:raw:JSON: {
                                "name": "",
                                "mobile_no": "",
                                "email": "",
                                "password": ""
                            }
    -----------------------------------------------------------
    LogIN:
        POST:
            url: http://localhost:3000/api/users/login
            Body:raw:JSON: {
                                "email": "",
                                "password": ""
                            }
    -----------------------------------------------------------
    Profile:
        GET:
            url: http://localhost:3000/api/users/me
    -----------------------------------------------------------
    Logout:
        GET:
            url: http://localhost:3000/api/logout
    -----------------------------------------------------------
    random-joke:
        GET:
            url: http://localhost:3000/api/random-joke
    -----------------------------------------------------------
    product-price-category:
        GET:
            url: http://localhost:3000/api/product-price-category
    -----------------------------------------------------------



