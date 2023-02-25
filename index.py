import pandas as pd
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Specify a font that supports Korean characters
plt.rc('font', family='NanumGothic')

plt.xlabel("Label for the X-Axis")
plt.ylabel("Label for the Y-Axis")

data = pd.read_excel("data.xlsx", sheet_name="data")

# Create a bar chart
data.plot(kind='bar', x='담당자', y='판매량')

# Add a title and axis labels
plt.title("Sales by Category")
plt.xlabel("담당자")
plt.ylabel("판매량")

# Save the chart as a PNG file
plt.savefig('chart.png')
