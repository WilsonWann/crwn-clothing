"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onAuthStateChangedListener = exports.signOutUser = exports.signInAuthUserWithEmailAndPassword = exports.createAuthUserWithEmailAndPassword = exports.createUserDocumentFromAuth = exports.db = exports.signInWithGoogleRedirect = exports.signInWithGooglePopup = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebaseConfig = {
  apiKey: "AIzaSyBsKrz_CeLLlSLL05d7d8E0rZJSpMcu3Dg",
  authDomain: "crwn-clothing-db-dfd9e.firebaseapp.com",
  projectId: "crwn-clothing-db-dfd9e",
  storageBucket: "crwn-clothing-db-dfd9e.appspot.com",
  messagingSenderId: "622915365454",
  appId: "1:622915365454:web:8a12aa92b352aeb64ab11f"
};
var firebaseApp = (0, _app.initializeApp)(firebaseConfig);
var provider = new _auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
var auth = (0, _auth.getAuth)();
exports.auth = auth;

var signInWithGooglePopup = function signInWithGooglePopup() {
  return (0, _auth.signInWithPopup)(auth, provider);
};

exports.signInWithGooglePopup = signInWithGooglePopup;

var signInWithGoogleRedirect = function signInWithGoogleRedirect() {
  return (0, _auth.signInWithRedirect)(auth, provider);
};

exports.signInWithGoogleRedirect = signInWithGoogleRedirect;
var db = (0, _firestore.getFirestore)();
exports.db = db;

var createUserDocumentFromAuth = function createUserDocumentFromAuth(userAuth) {
  var additionalInformation,
      userDocRef,
      userSnapShot,
      displayName,
      email,
      createdAt,
      _args = arguments;
  return regeneratorRuntime.async(function createUserDocumentFromAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          additionalInformation = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

          if (userAuth) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          userDocRef = (0, _firestore.doc)(db, 'users', userAuth.uid);
          _context.next = 6;
          return regeneratorRuntime.awrap((0, _firestore.getDoc)(userDocRef));

        case 6:
          userSnapShot = _context.sent;

          if (userSnapShot.exists()) {
            _context.next = 18;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createdAt = new Date();
          _context.prev = 10;
          _context.next = 13;
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, _objectSpread({
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }, additionalInformation)));

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](10);
          console.log("error creating the user", _context.t0.message);

        case 18:
          return _context.abrupt("return", userDocRef);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 15]]);
};

exports.createUserDocumentFromAuth = createUserDocumentFromAuth;

var createAuthUserWithEmailAndPassword = function createAuthUserWithEmailAndPassword(email, password) {
  return regeneratorRuntime.async(function createAuthUserWithEmailAndPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!email || !password)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap((0, _auth.createUserWithEmailAndPassword)(auth, email, password));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.createAuthUserWithEmailAndPassword = createAuthUserWithEmailAndPassword;

var signInAuthUserWithEmailAndPassword = function signInAuthUserWithEmailAndPassword(email, password) {
  return regeneratorRuntime.async(function signInAuthUserWithEmailAndPassword$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(!email || !password)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return");

        case 2:
          _context3.next = 4;
          return regeneratorRuntime.awrap((0, _auth.signInWithEmailAndPassword)(auth, email, password));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.signInAuthUserWithEmailAndPassword = signInAuthUserWithEmailAndPassword;

var signOutUser = function signOutUser() {
  return regeneratorRuntime.async(function signOutUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", (0, _auth.signOut)(auth));

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.signOutUser = signOutUser;

var onAuthStateChangedListener = function onAuthStateChangedListener(callback) {
  return (0, _auth.onAuthStateChanged)(auth, callback);
};

exports.onAuthStateChangedListener = onAuthStateChangedListener;