@echo off
REM ============================================================
REM  deploy.bat - One-click publish for the portfolio.
REM  Stages all changes, commits with your message, and pushes
REM  to GitHub Pages. Double-click it, or run  .\deploy.bat
REM  Live site updates ~1-2 min later: https://axlcrpz.github.io
REM ============================================================

REM Always run from this script's own folder.
cd /d "%~dp0"

echo.
echo ===========================================
echo   Deploying portfolio to GitHub Pages
echo ===========================================
echo.

REM Show what changed.
git status -s
echo.

REM Stage everything.
git add .

REM Ask for a commit message (press Enter to use a default).
set "msg="
set /p "msg=Describe what you changed (or press Enter): "
if "%msg%"=="" set "msg=Update portfolio"

REM Commit. If there is nothing to commit, this just warns and we still try to push.
git commit -m "%msg%"

echo.
echo Pushing to GitHub...
git push

echo.
echo -------------------------------------------
echo   Done. Your site will update in ~1-2 min:
echo   https://axlcrpz.github.io
echo -------------------------------------------
echo.
pause
