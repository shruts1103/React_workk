@echo off
:: Check for changes
git status --porcelain > changes.txt
if %errorlevel% neq 0 goto nochanges

:: Stage all changes
git add .

:: Commit changes with a timestamp
set "datetime=%date% %time%"
git commit -m "Auto-commit on %datetime%"

:: Push changes to the remote repository
git push

:nochanges
echo No changes to commit
del changes.txt
