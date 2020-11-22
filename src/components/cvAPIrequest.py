#  tomado del articulo https://tesel.mx/exportar-datos-de-google-sheets-a-json-en-tiempo-real-4230/
#


# web https://docs.google.com/spreadsheets/d/1q5ZQeq7lYs0fchbS5UFXrVs_sTXUUhIlyuWKJT9mcHk/edit?usp=sharing
# usar "https://spreadsheets.google.com/feeds/cells/1q5ZQeq7lYs0fchbS5UFXrVs_sTXUUhIlyuWKJT9mcHk/1/public/values?alt=json"


import requests
import json



#response = requests.get("https://spreadsheets.google.com/feeds/cells/1q5ZQeq7lYs0fchbS5UFXrVs_sTXUUhIlyuWKJT9mcHk/1/public/values?alt=json")

#print(response.status_code)

#print(response.json())



def jprint(obj):
    # create a formatted string of the Python JSON object
    text = json.dumps(obj, indent=4)
    print(text)

#jprint(response.json())





#myAPIContent = response.json()['feed']['entry']

def test():
  response = requests.get("https://spreadsheets.google.com/feeds/cells/1q5ZQeq7lYs0fchbS5UFXrVs_sTXUUhIlyuWKJT9mcHk/1/public/values?alt=json")
  print(response.status_code)
  #print(response.json().keys())
  #print(response.json()['feed'].keys())
  # name of sheet
  #print(response.json()['feed']['section_title']['$t'])
  #print(response.json()['feed']['gs$rowCount']['$t'])
  #print(response.json()['feed']['gs$colCount']['$t'])
  #How many cell have content
  #print(len(response.json()['feed']['entry']))
  #print(response.json()['feed']['entry'][0].keys())
  #print(response.json()['feed']['entry'][0]['gs$cell'].keys())
  #print(response.json()['feed']['entry'][0]['gs$cell']['col'])
  #print(response.json()['feed']['entry'][0]['section_title']['$t'])
  # code cof cell
  #print(response.json()['feed']['entry'][0]['content'].keys())
  # content of cell 
  #print(response.json()['feed']['entry'][0]['content']['$t'])

#test()



def printContent(obj):
  for content in obj:
    print(content['section_title']['$t'])
    print(content['content']['$t'])
    

#printContent(myAPIContent)


def create_CV():
  url_API_pre = 'https://spreadsheets.google.com/feeds/cells/1q5ZQeq7lYs0fchbS5UFXrVs_sTXUUhIlyuWKJT9mcHk/'
  url_API_post = '/public/values?alt=json'

  cv = {}
  
  for sheet in range(1,5):
    
    response = requests.get(url_API_pre + str(sheet) + url_API_post)
    if response.status_code is 200:
      print('status 200')

    section_title = response.json()['feed']['title']['$t']

    
    cv[section_title] = []
    rows = int(response.json()['feed']['gs$rowCount']['$t'])
    cols = int(response.json()['feed']['gs$colCount']['$t'])
    my_API_content = response.json()['feed']['entry']
    N = len(my_API_content)
    
    if N is cols * rows:
      print('correct rows and cols for sheet entitle = ' + section_title)

    #adding each item
    cell_names = [] 
    for i in range(cols):
      cell_names.append(my_API_content[i]['content']['$t'])

    for i in range(1,rows):
      job_item = {}
      for j in range(cols):
        job_item[cell_names[j]] = my_API_content[i * cols + j]['content']['$t']
        #job_item[cell_names[j]] = string.replace("\n","{'\n'}")
      cv[section_title].append(job_item)
  
  print(cv.keys())
  for item in cv:
    n = len(cv[item])
    print(item + ': ' + str(n) + ' items')

  return cv 

my_CV = create_CV()

with open('myCV.json', 'w') as fp:
  json.dump(my_CV, fp)

