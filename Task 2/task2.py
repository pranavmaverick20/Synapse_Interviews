import itertools
import functools
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv(r"C:\Users\admin\Desktop\synapse tasks\Synapse_Interviews\Task 2\GE_2024_Results.csv")
dimensions = df.shape
rows = dimensions[0]
columns = dimensions[1]
print("Initial Dimensions: -")
print(rows, columns)
print("First 20 rows: -")
print(df.iloc[0:20])
df = df.drop(columns=["ID"])
dimensions = df.shape
rows = dimensions[0]
columns = dimensions[1]
df.drop(df[df["EVM Votes"].isna()].index,inplace=True)


dimensions = df.shape
rows = dimensions[0]
columns = dimensions[1]
print("Dimensions after cleaning: -")
print(rows, columns)

telangana_df = df[df['State'] == 'Telangana']
telangana_df = telangana_df.sort_values('Total Votes', ascending=False)
print("Top 5 candidates from Telangana: -")
print(telangana_df.head(5))

# states = (set(df["State"]))
# i = 1
# statesc = {key: 0 for key in states}
# while i < rows:
#     for key in statesc:
#         if (df.iloc[i]["State"] == key):
#             statesc[key] += int(df.iloc[i]["Total Votes"])
#             continue
#     i += 1
# print(statesc)  # Complexity can be improved by using groupBy function
# for key in statesc:
#     state_votes = df[df["State"] == key]["Total Votes"]
#     statesc[key] = float(state_votes.sum())
# total_votes = float(df["Total Votes"].sum())
# print(statesc)
# print("Total number of votes: -")
# print(total_votes)
# statesp = statesc.copy()
# for key in statesp:
#     statesp[key] = float(statesc[key])*(100/total_votes)
# print(statesp)
state_votes = df.groupby('State')['Total Votes'].sum()
print(state_votes)
total_votes=df["Total Votes"].sum()
statesp=state_votes.map(lambda p: p*100/total_votes)
print(statesp)


parties = set(df["Party"])
parties_votes = {key: 0 for key in parties}
for key in parties_votes:
    party_votes = df[df["Party"] == key]["Total Votes"]
    parties_votes[key] = float(party_votes.sum())
parties_votes = list(parties_votes.items())
parties_votes.sort(key=lambda ele: ele[1], reverse=False)
print("Parties who received the most votes: -")
print(parties_votes[-5:])

lost_candidates = set(df[df["Result"] == "Lost"]["Candidate"])
lost_votes = {key: "" for key in lost_candidates}
total_votes = float(df["Total Votes"].sum())
for key in lost_votes:
    lost_votes[key] = int(df[df["Candidate"] == key]
                          ["Total Votes"].iloc[0])*100/total_votes
lost_votes = list(lost_votes.items())
lost_votes.sort(key=lambda x: x[1], reverse=True)
print("Highest voted Candidates among those who lost with highest percent voteshare nationally: -")
print(lost_votes[:5])

candidates = set(df["Candidate"])
candidates_votes = {key: 0 for key in candidates}
for key in candidates_votes:
    candidates_votes[key] = int(
        df[df["Candidate"] == key]["Total Votes"].iloc[0])
candidates_votes = list(candidates_votes.items())
candidates_votes.sort(key=lambda ele: ele[1], reverse=False)
most = candidates_votes[-5:].copy()
values = [x[1] for x in most]
my_labels = [x[0]for x in most]
y = np.array(values)
plt.pie(y, labels=my_labels, autopct="%1.1f%%")
plt.show()

kparties = set(df[df["State"] == "Karnataka"]["Party"])
kparties_postal = {key: 0 for key in kparties}
print(kparties_postal)
keyrem = []
for key in kparties_postal:
    t = df[(df["State"] == "Karnataka") & (
        df["Party"] == key)]["Postal Votes"].iloc[0]
    if (t == '-' or t == '0'):
        keyrem.append(key)
    else:
        kparties_postal[key] = int(t)
for key in keyrem:
    kparties_postal.pop(key)
kparties_postal = list(kparties_postal.items())
print(kparties_postal)
values = [x[1] for x in kparties_postal]
my_labels = [x[0] for x in kparties_postal]
print(my_labels)
print(values)
x = np.array(my_labels)
y = np.array(values)
plt.bar(x, y)
plt.xlabel('Parties')
plt.ylabel('Postal Votes')
plt.title('Postal Votes by Party')
plt.xticks(rotation=90)
plt.show()
