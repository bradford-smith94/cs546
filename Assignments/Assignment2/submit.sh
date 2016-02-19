#! /bin/sh
################################################################################
# Bradford Smith (bsmith8)
# CS 546 Assignment2 submit.sh
# 02/19/2016
# "I pledge my honor that I have abided by the Stevens Honor System."
################################################################################

AUTHOR='bsmith8'
ASSIGNMENT='cs546-assignment2'

# make tar.gz archive for easy submission
tar -cvzf $AUTHOR\_$ASSIGNMENT.tar.gz ./* --exclude='./node_modules' --exclude='*.zip'

# or zip if you prefer
#zip $AUTHOR\_$ASSIGNMENT.zip ./* -x './node_modules/*' '*.tar.gz'

