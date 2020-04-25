''' Algorithm for Senior Project'''
'''Required elements for answers table: ID, AvailableMornings, AvailableAfternoons, AvailabilityEvening, Project1, 
   Project2, Project3, Project4, Project5, Project6, SkillProgramming, SkillWebDesign, SkillMechEngineering,
   SkillNetworkDesign, SkillDatabase, SkillCompEngineering'''
import math
import boto3

'This is where we need to get the list from the database'

answerList = [
    [1, True, False, False, True, False, True, False, False, False, True, False, False, False, True, True],
    [2, True, True, False, False, True, True, False, False, False, True, False, False, False, True, True],
    [3, True, True, True, False, False, True, False, False, False, True, False, False, False, True, True],
    [4, False, True, False, True, False, False, True, False, False, True, False, False, False, True, True],
    [5, False, False, True, False, False, False, False, True, False, True, False, False, False, True, True],
    [6, True, False, True, True, False, True, False, False, False, True, False, False, False, True, True],
    [7, False, True, True, False, False, False, False, True, True, True, False, False, False, True, True],
    [8, True, True, False, False, True, False, False, False, True, True, False, False, False, True, True],
    [9, False, False, True, False, False, False, True, False, True, True, False, False, False, True, True]]

print(len(answerList) % 3)

groupList = []
Dict = {}


def sortAlgo(answerList):
    length = len(answerList)
    student = 0
    tempGroup = []
    tempStuID = []
    tempGroup.append(answerList[0])
    tempStuID.append(answerList[0][0])
    stuPos = 0

    while student <= length:
        student += 1
        stuPos += 1
        element = 1
        validationList = [0, 0, 0]
        valCheck = True

        if answerList[0][element] == answerList[student][element]:
            validationList[0] += 1
        elif answerList[0][element+1] == answerList[student][element+1]:
            validationList[0] += 1
        elif answerList[0][element+2] == answerList[student][element+2]:
            validationList[0] += 1
        element += 3

        if answerList[0][element] == answerList[student][element]:
            validationList[1] += 1
        elif answerList[0][element+1] == answerList[student][element+1]:
            validationList[1] += 1
        elif answerList[0][element+2] == answerList[student][element+2]:
            validationList[1] += 1
        elif answerList[0][element+3] == answerList[student][element+3]:
            validationList[1] += 1
        elif answerList[0][element+4] == answerList[student][element+4]:
            validationList[1] += 1
        elif answerList[0][element+5] == answerList[student][element+5]:
            validationList[1] += 1
        element += 6

        if answerList[0][element] == answerList[student][element]:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+1] == answerList[student][element+1]:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+2] == answerList[student][element+2]:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+3] == answerList[student][element+3]:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+4] == answerList[student][element+4]:
            'Students have same skill'
        else:
            validationList[2] += 1
        if answerList[0][element+5] == answerList[student][element+5]:
            'Students have same skill'
        else:
            validationList[2] += 1

        for i in validationList:
            if i == 0:
                valCheck = False

        if valCheck == True:
            tempGroup.append(answerlist[student])
            tempStuID.append(stuPos)

        if len(tempGroup) == 3:
            groupList.append(tempGroup)
            answerList.pop(0)
            for i in tempStuID:
                answerList.pop(i)
            break

    if len(answerList) > 3:
        sortAlgo(answerList)
    else:
        for stu in answerList:
            groupCount = 0
            stuCount = 0
            elementCount = 1
            while groupCount < len(groupList):
                if len(groupList[groupCount]) > 3:
                    'skip'
                else:
                    while stuCount <= 3:
                        while elementCount <= 3:
                            if stu[elementCount] == groupList[groupCount][stuCount][elementCount]:
                                groupList[groupCount].append(stu)
                            else:
                                elementCount += 1
                        stuCount += 1
                    groupCount += 1

sortAlgo(answerList)
print(groupList)
'This is the part where we put the groupList into the database'
