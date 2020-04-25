''' Algorithm for Senior Project'''
'''Required elements for answers table: ID, AvailableMornings, AvailableAfternoons, AvailabilityEvening, Project1, 
   Project2, Project3, Project4, Project5, Project6, SkillProgramming, SkillWebDesign, SkillMechEngineering,
   SkillNetworkDesign, SkillDatabase, SkillCompEngineering'''
import math
import boto3

'This is where we need to get the list from the database'

answerList = [
    [1, True, False, False, True, False, True, False, False, False, True, False, False, False, True, True],
    [2, True, True, False, False, True, True, False, False, False, True, True, False, False, False, False],
    [3, True, True, True, False, False, True, False, False, False, False, False, False, True, False, True],
    [4, False, True, False, True, False, False, True, False, False, True, False, False, False, False, True],
    [5, False, False, True, False, False, False, False, True, False, False, False, True, False, True, False],
    [6, True, False, True, True, False, True, False, False, False, True, False, False, False, True, False],
    [7, False, True, True, False, False, False, False, True, True, False, False, False, True, False, True],
    [8, True, True, False, False, True, False, False, False, True, True, False, True, False, True, True],
    [9, False, False, True, False, False, False, True, False, True, True, True, True, False, False, False]]

groupList = []
Dict = {}


def sortAlgo(answerList):
    length = len(answerList)
    student = 0
    tempGroup = []
    tempStuID = []
    tempGroup.append(answerList[0])
    'tempStuID.append(answerList[0][0])'
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
            tempGroup.append(answerList[student])
            tempStuID.append(stuPos)

        print(tempStuID)

        if len(tempGroup) == 3:
            groupList.append(tempGroup)
            answerList.pop(0)
            tempStuID[0] = tempStuID[0] - 1
            answerList.pop(tempStuID[0])
            tempStuID[1] = tempStuID[1]-2
            answerList.pop(tempStuID[1])
            break

    for i in answerList:
        print(i)
    print('')
    for i in groupList:
        for x in i:
            print(x)
        print('')
    print('')

    stuAdded = False

    if len(answerList) > 3:
        sortAlgo(answerList)
    else:
        for stu in answerList:
            stuAdded = False
            groupCount = 0
            stuCount = 0
            elementCount = 1
            while groupCount < len(groupList) and stuAdded == False:
                if len(groupList[groupCount]) > 3:
                    'skip'
                    groupCount += 1
                else:
                    if stuAdded == False:
                        while stuCount <= 3:
                            if stuAdded == False:
                                while elementCount <= 3:
                                    if stu[elementCount] == groupList[groupCount][stuCount][elementCount]:
                                        groupList[groupCount].append(stu)
                                        stuAdded = True
                                        break
                                    else:
                                        elementCount += 1
                                stuCount += 1
                            else:
                                break
                    else:
                        break
                    groupCount += 1

sortAlgo(answerList)

for i in groupList:
    for x in i:
        print(x)
    print('')
'This is the part where we put the groupList into the database'
