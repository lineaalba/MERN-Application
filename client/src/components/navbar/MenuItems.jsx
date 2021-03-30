/**
 * Exports menu options.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

const issues = {
    title: 'Issues',
    url: '/',
    cName: 'navLinks'
}

const login = {
    title: 'Login',
    url: '/login',
    cName: 'navLinks'
}

const logout = {
    title: 'Logout',
    url: '/login',
    cName: 'navLinks'
}

const dashboard = {
    title: 'Dashboard',
    url: '/dashboard',
    cName: 'navLinks'
}

export const MenuItemsLogin = [issues, login, dashboard]

export const MenuItemsLogout = [issues, logout, dashboard]