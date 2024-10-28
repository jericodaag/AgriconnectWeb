const authControllers = require('../controllers/authControllers')
const { authMiddleware } = require('../middlewares/authMiddleware')
const router = require('express').Router()

// Basic authentication routes
router.post('/admin-login', authControllers.admin_login)
router.post('/seller-login', authControllers.seller_login)
router.post('/seller-register', authControllers.seller_register)
router.get('/logout', authMiddleware, authControllers.logout)

// User information routes
router.get('/get-user', authMiddleware, authControllers.getUser)
router.post('/profile-image-upload', authMiddleware, authControllers.profile_image_upload)
router.post('/profile-info-add', authMiddleware, authControllers.profile_info_add)

// ID verification routes
router.post('/renew-seller-id', authMiddleware, authControllers.renew_seller_id)
router.put('/verify-seller-id/:sellerId', authMiddleware, authControllers.verify_seller_id)
router.put('/reject-seller-id/:sellerId', authMiddleware, authControllers.reject_seller_id)

// Password reset flow
router.post('/forgot-password', authControllers.forgot_password)  // Initial request without auth
router.get('/verify-reset-token/:token', authControllers.verify_reset_token)  // Verify token validity
router.post('/reset-password/:token', authControllers.reset_password)  // Actual password reset

// Admin password reset management
router.get('/admin/password-reset-requests', authMiddleware, authControllers.get_password_reset_requests)
router.get('/admin/password-reset/:sellerId', authMiddleware, authControllers.get_seller_reset_status)
router.post('/admin/approve-reset/:sellerId', authMiddleware, authControllers.approve_password_reset)
router.post('/admin/reject-reset/:sellerId', authMiddleware, authControllers.reject_password_reset)

module.exports = router