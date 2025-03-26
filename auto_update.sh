#!/bin/bash
cd /path/to/your/repo  # Change this to your repo path
git add .
git commit -m "Auto-update on $(date)"
git push origin main
