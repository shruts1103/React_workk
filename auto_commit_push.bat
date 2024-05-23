@REM @echo off
@REM :: Check for changes
@REM git status --porcelain > changes.txt
@REM if %errorlevel% neq 0 goto nochanges

@REM :: Stage all changes
@REM git add .

@REM :: Commit changes with a timestamp
@REM set "datetime=%date% %time%"
@REM git commit -m "Auto-commit on %datetime%"

@REM :: Push changes to the remote repository
@REM git push

@REM :nochanges
@REM echo No changes to commit
@REM del changes.txt

@echo off
set FILE_PATH=C:\React 2\React_workk
set COMMIT_MESSAGE=Automated update

echo Updating file...
echo Hello, world! > %FILE_PATH%

echo Staging changes...
git add %FILE_PATH%

echo Committing changes...
git commit -m "%COMMIT_MESSAGE%"

echo Pushing changes to GitHub...
git push

echo Done.
