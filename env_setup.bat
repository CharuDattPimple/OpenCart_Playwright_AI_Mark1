@echo off
setlocal

echo ==========================================
echo  Environment Setup - OpenCart + Playwright
echo ==========================================
echo.

echo [1/9] Installing dotenv - loads environment variables from a .env file
call npm install dotenv
if errorlevel 1 goto :error

echo.
echo [2/9] Installing Faker - generates realistic fake test data
call npm install @faker-js/faker
if errorlevel 1 goto :error

echo.
echo [3/9] Installing Luxon - handles dates, times, and time zones
call npm install luxon
if errorlevel 1 goto :error

echo.
echo [4/9] Installing AJV, csv-parse, and xlsx - validates JSON data and reads CSV/Excel files
call npm install ajv csv-parse xlsx
if errorlevel 1 goto :error

echo.
echo [5/9] Installing axe-core Playwright - checks web pages for accessibility issues
call npm install @axe-core/playwright
if errorlevel 1 goto :error

echo.
echo [6/9] Installing Allure Playwright - creates Allure test reports
call npm install allure-playwright
if errorlevel 1 goto :error

echo.
echo [7/9] Installing Node.js types - provides TypeScript definitions for Node.js APIs
call npm install -D @types/node
if errorlevel 1 goto :error

echo.
echo [8/9] Installing Playwright browsers - downloads browsers needed to run Playwright tests
call npx playwright install
if errorlevel 1 goto :error

echo.
echo [9/9] Installing mysql2 - connects to a MySQL database from Node.js/TypeScript
call npm install mysql2
if errorlevel 1 goto :error

echo.
echo ==========================================
echo  All dependencies installed successfully!
echo ==========================================
pause
exit /b 0

:error
echo.
echo ==========================================
echo  Installation failed. Check the error above.
echo ==========================================
pause
exit /b 1
