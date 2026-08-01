@echo off
setlocal
cd /d "%~dp0"
if exist "node_modules\electron\dist\electron.exe" (
  start "" "node_modules\electron\dist\electron.exe" "%cd%"
  exit /b 0
)
where electron >nul 2>nul
if %errorlevel%==0 (
  start "" electron "%cd%"
  exit /b 0
)
echo Electron is not installed.
echo Run npm install once, then use this file again.
pause
