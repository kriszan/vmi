from selenium import webdriver
from bs4 import BeautifulSoup
import time
from selenium.webdriver.chrome.service import Service
import random
import json


service = Service(executable_path='C:\\Users\\Bence\\Desktop\\chromedriver.exe')
browser = webdriver.Chrome(service=service)
browser.get("https://www.cinemacity.hu/")
time.sleep(45)
browser.save_screenshot("kecske.png")
html = browser.page_source
soup = BeautifulSoup(html, "html.parser")
browser.quit()

print(soup)

imgs = soup.find_all("img", {"class": "img-responsive poster-image poster v-lazy-loaded v-lazy-loading"})

lst = []
id = 0
for i in imgs:
    title = i["alt"].split('"')[1]
    src = i["src"]
    discription = "az employeeknak nem fizettek eleget, ahhoz hogy legyen leírás a filmekről"
    cost = random.randint(100, 6969)
    element = {"id": id, "name": title, "img": src, "discription": discription, "cost": cost}
    if (not any(e["name"] == title for e in lst)):
        lst.append(element)
        id +=1

jsonO = json.dumps(lst, indent=4, ensure_ascii=False)

with open("data.json", "wb") as file:
    file.write(jsonO.encode("utf-8"))

print("data amount: " + id-1)