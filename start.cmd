@ECHO OFF
REM +-------------------------------------------------------+
REM |                                                       |
REM |             Area-27v2 Discord Intergration            |
REM |                  Written by Sxribe                    |
REM |                                                       |
REM +-------------------------------------------------------+

echo.
echo Starting application...
echo.
echo.

cd client

npm i && cls && node dist/index.js --redirect-warnings=warnings.log