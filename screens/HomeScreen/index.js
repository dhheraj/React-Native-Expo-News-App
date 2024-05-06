import React, { Component,useState } from 'react'
import { View, Text, Image, ScrollView, Linking,StatusBar, Button, Pressable } from 'react-native'
import axios from 'axios'
import { Card, Title, Paragraph } from 'react-native-paper'
import Header from '../../components/AppBar'

export default class HomeScreen extends Component {
    
    state = {
        articles: [{
            "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "cryptopotato.com",
                "title": "9 Celebrity Endorsements That Are Pushing Crypto Mainstream",
                "description": "Grammy award-winning rapper Eminem recently cut an ad for Crypto.com to advertise blockchain to NBA fans. Here are 10 other celebrity endorsements that prove cryptocurrency adoption is accelerating. But real quick first— here’s “The Real Slim Shady” singer’s …",
                "url": "https://biztoc.com/x/5e170562a3de1e23",
                "urlToImage": "https://c.biztoc.com/p/5e170562a3de1e23/s.webp",
                "publishedAt": "2024-05-05T17:24:06Z",
                "content": "Grammy award-winning rapper Eminem recently cut an ad for Crypto.com to advertise blockchain to NBA fans. Here are 10 other celebrity endorsements that prove cryptocurrency adoption is accelerating.B… [+264 chars]"
                },
                {
                    "source": {
                    "id": null,
                    "name": "The Conversation Africa"
                    },
                    "author": "Francesco Biondi, Associate Professor, Human Systems Labs, University of Windsor",
                    "title": "Since Tesla recalled its vehicles in 2023, there have been 20 accidents and investigators are asking why",
                    "description": "U.S. regulators have opened an investigation to assess the outcomes of Tesla’s 2023 recall.",
                    "url": "https://theconversation.com/since-tesla-recalled-its-vehicles-in-2023-there-have-been-20-accidents-and-investigators-are-asking-why-229065",
                    "urlToImage": "https://images.theconversation.com/files/591884/original/file-20240502-16-b3ny9e.jpg?ixlib=rb-4.1.0&rect=0%2C488%2C4031%2C2015&q=45&auto=format&w=1356&h=668&fit=crop",
                    "publishedAt": "2024-05-05T14:04:52Z",
                    "content": "When humans share decision-making with automated driving systems, the risk of collisions increases. (Shutterstock)\r\nTesla is yet again undergoing scrutiny from federal regulators in the United States… [+3815 chars]"
                    },

                    {
                        "source": {
                        "id": "business-insider",
                        "name": "Business Insider"
                        },
                        "author": "Matt Turner",
                        "title": "The new power figures in hedge funds do not manage money",
                        "description": "The hedge-fund industry's newest rock stars don't manage money. That and more in today's newsletter.",
                        "url": "https://www.businessinsider.com/insider-today-hedge-fund-goldman-silicon-valley-green-card-2024-5",
                        "urlToImage": "https://i.insider.com/6634d6ca0dfb1341e902316f?width=1200&format=jpeg",
                        "publishedAt": "2024-05-05T13:27:51Z",
                        "content": "iStock; Rebecca Zisser/BI\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Hello! A submersible s… [+4912 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "finance.yahoo.com",
                        "title": "5 things I want to hear from Tesla CEO Elon Musk at the Milken conference",
                        "description": "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with: • None The chart of the day Sound the alarm bell — we are about to have a post-earnings Elon Musk sighting. The annual Milken conference,…",
                        "url": "https://biztoc.com/x/7efb48aab2687909",
                        "urlToImage": "https://c.biztoc.com/p/7efb48aab2687909/s.webp",
                        "publishedAt": "2024-05-05T13:18:05Z",
                        "content": "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:None The chart of the daySound the alarm bell we are about to have a post-earn… [+318 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "CleanTechnica"
                        },
                        "author": "Jennifer Sensiba",
                        "title": "Electrify America Turns Back To Growth",
                        "description": "A few years ago, Electrify America announced a “Boost Plan” that aims to more than double the number of stations and chargers by the end of 2025. Serious hardware problems got in the way of that plan, forcing the company to slow down. But, another recent anno…",
                        "url": "https://cleantechnica.com/2024/05/05/electrify-america-turns-back-to-growth/",
                        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/05/EA-New-Station-San-Antonio-1600x890-New-Edit-Jennifer-Sensiba.jpg",
                        "publishedAt": "2024-05-05T13:18:00Z",
                        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nA few years ago, Electrify America announced a “Boost Plan” that aims to more than double the number of stati… [+6775 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "aol.com",
                        "title": "How Nvidia is dominating an AI-obsessed earnings season without even reporting yet",
                        "description": "None Nvidia is dominating earnings season, and it hasn't even reported results yet. • None Other mega-cap tech giants have been mentioning on earnings calls that they're boosting investment in AI infrastructure. • None Nvidia offers the popular H100 GPU chip …",
                        "url": "https://biztoc.com/x/ac1434b9dff0efe7",
                        "urlToImage": "https://c.biztoc.com/p/ac1434b9dff0efe7/s.webp",
                        "publishedAt": "2024-05-05T13:14:06Z",
                        "content": "None Nvidia is dominating earnings season, and it hasn't even reported results yet.None Other mega-cap tech giants have been mentioning on earnings calls that they're boosting investment in AI infras… [+273 chars]"
                        },
                        {
                    "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "investopedia.com",
                        "title": "4 Key Takeaways From Warren Buffett's Comments at Berkshire Hathaway Annual Meeting",
                        "description": "Berkshire Hathaway (BRK.A, BRK.B) shareholders flocked to Omaha, Nebraska, on Saturday, looking to glean some insight from Warren Buffett at the company's annual meeting. Buffett touched on everything from Tesla's (TSLA) self-driving technology to his thought…",
                        "url": "https://biztoc.com/x/72fcac4ff29a5c7f",
                        "urlToImage": "https://c.biztoc.com/p/72fcac4ff29a5c7f/og.webp",
                        "publishedAt": "2024-05-05T13:12:08Z",
                        "content": "Berkshire Hathaway (BRK.A, BRK.B) shareholders flocked to Omaha, Nebraska, on Saturday, looking to glean some insight from Warren Buffett at the company's annual meeting.Buffett touched on everything… [+286 chars]"
                        },
                    {
                        "source": {
                        "id": null,
                        "name": "Slashdot.org"
                        },
                        "author": "feedfeeder",
                        "title": "As Elon Musk Abandons the $25K Tesla, This EV Costs Just $4,400",
                        "description": "Meet the Zhidou Rainbow&mdash;it costs less than an ebike and is capable of completing the average US daily commute with charge to spare.",
                        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173759886",
                        "urlToImage": null,
                        "publishedAt": "2024-05-05T13:12:04Z",
                        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "finbold.com",
                        "title": "Dogecoin could be on the road to a “long-term bullish rally”",
                        "description": "Meme cryptocurrency Dogecoin (DOGE) continues to dominate the spotlight amid the ongoing market recovery, posting significant gains as it strives to breach the $0.20 resistance. In this regard, a crypto analyst using the pseudonym Behdark in a TradingView pos…",
                        "url": "https://biztoc.com/x/410520a832385d35",
                        "urlToImage": "https://c.biztoc.com/p/410520a832385d35/s.webp",
                        "publishedAt": "2024-05-05T13:00:14Z",
                        "content": "Meme cryptocurrency Dogecoin (DOGE) continues to dominate the spotlight amid the ongoing market recovery, posting significant gains as it strives to breach the $0.20 resistance.In this regard, a cryp… [+244 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "aol.com",
                        "title": "5 things I want to hear from Tesla CEO Elon Musk at the Milken conference",
                        "description": "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with: • None The chart of the day Sound the alarm bell — we are about to have a post-earnings Elon Musk sighting. The annual Milken conference,…",
                        "url": "https://biztoc.com/x/fa5795714bf63291",
                        "urlToImage": "https://c.biztoc.com/p/fa5795714bf63291/s.webp",
                        "publishedAt": "2024-05-05T12:46:08Z",
                        "content": "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:None The chart of the daySound the alarm bell we are about to have a post-earn… [+306 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "coingape.com",
                        "title": "Crypto Price Prediction: Top Meme Coins to Focus As $BTC Sparks Fresh Rally Above $63k",
                        "description": "Crypto Price Prediction: This week, the cryptocurrency market experienced significant volatility, with Bitcoin displaying a dramatic price fluctuation from a high of $67,441 to a low of $56,500. Despite early week sell-off, a resurgence in demand helped push …",
                        "url": "https://biztoc.com/x/c6915f6cb73c24b1",
                        "urlToImage": "https://c.biztoc.com/p/c6915f6cb73c24b1/s.webp",
                        "publishedAt": "2024-05-05T12:44:07Z",
                        "content": "Crypto Price Prediction: This week, the cryptocurrency market experienced significant volatility, with Bitcoin displaying a dramatic price fluctuation from a high of $67,441 to a low of $56,500. Desp… [+280 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Biztoc.com"
                        },
                        "author": "washingtonpost.com",
                        "title": "Tesla Autopilot crashes and recall raise questions about federal oversight",
                        "description": "Carl Hunter was driving his Tesla Model S home on a highway northeast of Seattle last month. The Autopilot system was turned on and he was looking at his phone, Hunter later told police. He heard a bang as the vehicle lurched forward, ramming into a motorbike…",
                        "url": "https://biztoc.com/x/a0e620feb5bd1778",
                        "urlToImage": "https://c.biztoc.com/p/a0e620feb5bd1778/og.webp",
                        "publishedAt": "2024-05-05T12:42:17Z",
                        "content": "Carl Hunter was driving his Tesla Model S home on a highway northeast of Seattle last month. The Autopilot system was turned on and he was looking at his phone, Hunter later told police. He heard a b… [+149 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Trendhunter.com"
                        },
                        "author": null,
                        "title": "Top 50 Mobile Trends in May - From Elegant EV Brand Smartphones to Scenic Audio Apps (TrendHunter.com)",
                        "description": "(TrendHunter.com) In the domain of mobile technology, the past month has been marked by significant innovation. Products ranging from sophisticated applications to advanced hardware, have been introduced, reflecting...",
                        "url": "https://www.trendhunter.com/slideshow/may-2024-mobile",
                        "urlToImage": "https://cdn.trendhunterstatic.com/thumbs/533/may-2024-mobile.jpeg?auto=webp",
                        "publishedAt": "2024-05-05T12:35:02Z",
                        "content": "In the domain of mobile technology, the past month has been marked by significant innovation. Products ranging from sophisticated applications to advanced hardware, have been introduced, reflecting a… [+1130 chars]"
                        },
                        {
                        "source": {
                        "id": "business-insider",
                        "name": "Business Insider"
                        },
                        "author": "Matthew Fox",
                        "title": "How Nvidia is dominating an AI-obsessed earnings season without even reporting yet",
                        "description": "Elon Musk said during Tesla's Q1 earnings call that the company will double the number of Nvidia AI chips it uses by year-end.",
                        "url": "https://www.businessinsider.com/nvidia-impact-q1-earnings-season-ai-nvda-stock-price-capex-2024-5",
                        "urlToImage": "https://i.insider.com/66352b0710dfcda40966a397?width=1200&format=jpeg",
                        "publishedAt": "2024-05-05T12:31:01Z",
                        "content": "AndreyKrav/iStock, Michael M. Santiago/Getty, Tyler Le/BI\r\n<ul><li>Nvidia is dominating earnings season, and it hasn't even reported results yet.</li><li>Other mega-cap tech giants have been mentioni… [+4226 chars]"
                        },
                        {
                        "source": {
                        "id": null,
                        "name": "Yahoo Entertainment"
                        },
                        "author": "Brian Sozzi",
                        "title": "5 things I want to hear from Tesla CEO Elon Musk at the Milken conference",
                        "description": "Out comes Tesla CEO Musk from the factory floor to one of more glitzy conferences of the year.",
                        "url": "https://finance.yahoo.com/news/5-things-i-want-to-hear-from-tesla-ceo-elon-musk-at-the-milken-conference-123017130.html",
                        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/99jowd.GFFZf0tw8mjophw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MjU-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/62d375d0-e594-11ee-bf3d-71d822bee51e",
                        "publishedAt": "2024-05-05T12:30:17Z",
                        "content": "This is The Takeaway from today's Morning Brief, which you can sign up to receive in your inbox every morning along with:\r\n<ul><li>The chart of the day\r\n</li><li>What we're watching\r\n</li><li>What we… [+4174 chars]"
                        },
                        {
                        "source": {
                        "id": "wired",
                        "name": "Wired"
                        },
                        "author": "Alistair Charlton",
                        "title": "As Elon Musk Abandons the $25K Tesla, This EV Costs Just $4,400",
                        "description": "Meet the Zhidou Rainbow—it costs less than an ebike and is capable of completing the average US daily commute with charge to spare.",
                        "url": "https://www.wired.com/story/zhidou-rainbow-ev-costs-just-dollar4400/",
                        "urlToImage": "https://media.wired.com/photos/6635676744feaf4b1663c08a/191:100/w_1280,c_limit/Zhidou-Rainbow-2.jpg",
                        "publishedAt": "2024-05-05T12:30:00Z",
                        "content": "As Elon Musk steps away, yet again, from the idea of a $25,000 Tesla, lets take this opportunity to zoom out and appreciate what a truly affordable EV can be. For this we need to ignore the Nissan Le… [+2176 chars]"
                        },
                        
        ],
        isLoading: true,
        errors: null
    };
    getArticles() {
        axios
          .get(
            "https://newsapi.org/v2/everything?q=Cryptocurrency&from=2021-09-08&sortBy=popularity&apiKey=API_KEY"
          )
          .then(response =>
            response.data.articles.map(article => ({
              date: `${article.publishedAt}`,
              title: `${article.title}`,
              url: `${article.url}`,
              description: `${article.description}`,
              urlToImage: `${article.urlToImage}`,
            }))
          )
          .then(articles => {
            this.setState({
              articles,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
    }
componentDidMount() {
        this.getArticles();
    }

    render(){
        const{ isLoading, articles } = this.state;
        return (
        <View>
          <StatusBar
        animated={true}
        backgroundColor="black"
      />
        <Header/>
        <ScrollView
        style={{marginBottom:55}}
        >
        {!isLoading ? (
        articles.map(article => {
        const {date, title, url, description, urlToImage} = article;
        return(
        <Card key={url} style={{margin:10,borderRadius:10}}  //, borderColor:'black', borderRadius:5, borderBottomWidth:1
        >
        <View>
        {/*  Text */}
        <View style={{justifyContent:'space-around', margin:10}}>
        
        {/* </View> */}
        {/*  Image */}
        {/* <View style={{flex:1/3, margin:10}}> */}
        <Image style={{width:320, height:180,borderRadius:8}} source={{uri: urlToImage}} />
        <Title style={{fontWeight:"bold"}}>{title}</Title>
        </View>
        </View>
        <View style={{margin:10,marginTop:-15}}>
        <Paragraph>{description}</Paragraph>
        {/* <Text>Published At: {date}</Text> */}
        </View>
        <View style={{margin:10,marginTop:-6}}>
          <Pressable onPress={()=>{Linking.openURL(`${url}`)}}  style={{alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'black',}}>
      <Text style={{ fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',}}>Read more</Text>
      </Pressable>
        </View>
        </Card>
        );
        })
        ) : (
        <Text style={{marginLeft:150,marginTop:340}}>Loading...</Text>
        )}
        </ScrollView>
        </View>
        )
        }
}


