const bcrypt = require('bcrypt');

const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const bodyParser = require('body-parser');

const upload = require('../config/multerConfig');
const {
    where
} = require('sequelize');

module.exports = (app, User) => {

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Add session middleware
    app.use(session({
        secret: 'mysecret',
        resave: false,
        saveUninitialized: false
    }));

    // Add flash middleware
    app.use(flash());


    app.post('/upload/:userId', upload.fields([{
            name: 'profileImage',
            maxCount: 1
        },
        {
            name: 'profileImage2',
            maxCount: 1
        },
        {
            name: 'profileImage3',
            maxCount: 1
        },
        {
            name: 'profileImage4',
            maxCount: 1
        },
        {
            name: 'profileImage5',
            maxCount: 1
        },
        {
            name: 'profileImage6',
            maxCount: 1
        }
    ]), async (req, res) => {
        try {
            const userId = req.params.userId; // retrieve user ID from form data
            const file = req.files['profileImage'] ? req.files['profileImage'][0] : null;
            const file2 = req.files['profileImage2'] ? req.files['profileImage2'][0] : null;
            const file3 = req.files['profileImage3'] ? req.files['profileImage3'][0] : null;
            const file4 = req.files['profileImage4'] ? req.files['profileImage4'][0] : null;
            const file5 = req.files['profileImage5'] ? req.files['profileImage5'][0] : null;
            const file6 = req.files['profileImage6'] ? req.files['profileImage6'][0] : null;

            // Check if any image is uploaded
            if (file || file2 || file3 || file4 || file5 || file6) {
                // Save the file path or URL to the user profile image field in the database
                const updateFields = {};
                if (file) updateFields.profile_image = path.join('/img/', file.filename);
                if (file2) updateFields.profile_image2 = path.join('/img/', file2.filename);
                if (file3) updateFields.profile_image3 = path.join('/img/', file3.filename);
                if (file4) updateFields.profile_image4 = path.join('/img/', file4.filename);
                if (file5) updateFields.profile_image5 = path.join('/img/', file5.filename);
                if (file6) updateFields.profile_image6 = path.join('/img/', file6.filename);

                await User.update(updateFields, {
                    where: {
                        id: userId
                    }
                });
            }

            res.redirect('/success');
        } catch (err) {
            // Handle other types of errors
            console.error('Error: ' + err);
            res.redirect('/success');
        }
    });

    app.get('/success', (req, res) => {
        res.render('success');
    });

    app.get('/contact', (req, res) => {
        res.render('contact');
    });


    app.get('/About', (req, res) => {
        res.render('About');
    });



    // Route to render the upload form
    app.get('/upload/:userId', async (req, res) => {
        const userId = req.params.userId;
        res.render('upload', {
            userId
        });
    });

    //retrieve
    // Route to serve the user profile image
    app.get('/profile-image/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const imagePath = user.profile_image;
            if (!imagePath) {
                return res.status(404).send('Profile image not found');
            }
            const imageAbsolutePath = path.join(__dirname, '../public', imagePath);
            res.sendFile(imageAbsolutePath);
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });

    // Route to serve the user profile image2
    app.get('/profile-image2/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const imagePath = user.profile_image2;
            if (!imagePath) {
                return res.status(404).send('Profile image2 not found');
            }
            const imageAbsolutePath = path.join(__dirname, '../public', imagePath);
            res.sendFile(imageAbsolutePath);
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });

    // Route to serve the user profile image3
    app.get('/profile-image3/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const imagePath = user.profile_image3;
            if (!imagePath) {
                return res.status(404).send('Profile image3 not found');
            }
            const imageAbsolutePath = path.join(__dirname, '../public', imagePath);
            res.sendFile(imageAbsolutePath);
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });

    // Route to serve the user profile image4
    app.get('/profile-image4/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const imagePath = user.profile_image4;
            if (!imagePath) {
                return res.status(404).send('Profile image4 not found');
            }
            const imageAbsolutePath = path.join(__dirname, '../public', imagePath);
            res.sendFile(imageAbsolutePath);
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });

    // Route to serve the user profile image5
    app.get('/profile-image5/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const imagePath = user.profile_image5;
            if (!imagePath) {
                return res.status(404).send('Profile image5 not found');
            }
            const imageAbsolutePath = path.join(__dirname, '../public', imagePath);
            res.sendFile(imageAbsolutePath);
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });

    // Route to serve the user profile image6
    app.get('/profile-image6/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const imagePath = user.profile_image6;
            if (!imagePath) {
                return res.status(404).send('Profile image6 not found');
            }
            const imageAbsolutePath = path.join(__dirname, '../public', imagePath);
            res.sendFile(imageAbsolutePath);
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });

    // Route to serve the user profile page
    app.get('/profile/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.render('image', {
                user,
                userId
            });
        } catch (err) {
            console.error('Error: ' + err);
            res.status(500).send('Server Error');
        }
    });


    //login and register
    app.get('/', (req, res) => {
        res.render('welcome');
    });

    app.post('/register', async (req, res) => {
        const {
            email,
            password,
            confirmPassword,
            fullName,
            phoneNumber,
            locationOrAddress,
            dateOfBirth,
            bloodType,
            gender,
            diabetes,
            hyperTension,
            asthma,
            heartDisease,
            surgeries,
            allergies,
            drugs,
            weight,
            height,
            other,
            facebook,
            instagram,
            snapchat,
            telegram,
        } = req.body;


        if (password !== confirmPassword) {
            return res.status(400).send('Password and confirm password do not match.');
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 8);

        try {
            // Create a new user with the hashed password and additional fields
            const user = await User.create({
                email,
                password: hashedPassword,
                FullName: fullName,
                PhoneNumber: phoneNumber,
                LocationOrAddress: locationOrAddress,
                DateOfBirth: dateOfBirth,
                BloodType: bloodType,
                gender,
                diabetes,
                hyperTension,
                asthma,
                heartDisease,
                surgeries,
                allergies,
                drugs,
                Weight: weight,
                Height: height,
                other,
                facebook,
                instagram,
                snapchat,
                telegram,
            });

            res.render('upload', {
                userId: user.id
            });
        } catch (error) {
            console.error(error);
            req.flash('error', 'An error occurred while registering the user.');
            res.redirect('/register');
        }
    });

    app.post('/login', async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        try {
            // Find the user with the specified email
            const user = await User.findOne({
                where: {
                    email
                }
            });

            // If the user was not found, send an error message
            if (!user) {
                req.flash('error', 'User not found.');
                return res.redirect('/login');
            }

            // Compare the supplied password with the hashed password in the database
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                req.flash('error', 'Incorrect password.');
                return res.redirect('/login');
            }

            // Retrieve user data based on the user ID
            const userId = user.id;
            const userData = await User.findByPk(userId);

            res.render('index', {
                userData,
                userId,
                user
            });
        } catch (error) {
            console.error(error);
            req.flash('error', 'An error occurred while logging in.');
            res.redirect('/login');
        }
    });



    app.get('/login', (req, res) => {
        res.render('login');
    });

    app.get('/register', (req, res) => {
        res.render('register');
    });




};
