
import React from 'react';
import { ArrowDownCircle, BarChart, BookOpen, BrainCircuit, Building, Globe, Info, LineChart, Network, PieChart, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import KeyMetric from '@/components/KeyMetric';
import DataCard from '@/components/DataCard';
import Section from '@/components/Section';
import FactBox from '@/components/FactBox';
import Navigation from '@/components/Navigation';
import FloatingIsland from '@/components/FloatingIsland';
import { caseData } from '@/data/caseData';

const navItems = [
  { label: 'Overview', href: 'overview', icon: <Info className="h-4 w-4" /> },
  { label: 'Key Metrics', href: 'key-metrics', icon: <PieChart className="h-4 w-4" /> },
  { label: 'Context', href: 'context', icon: <Globe className="h-4 w-4" /> },
  { label: 'Network Effects', href: 'network-effects', icon: <Network className="h-4 w-4" /> },
  { label: 'Competition Law', href: 'competition-law', icon: <Building className="h-4 w-4" /> },
  { label: 'Strategy', href: 'strategy', icon: <Trophy className="h-4 w-4" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-100">
      <Navigation items={navItems} />
      
      {/* Hero Section */}
      <div className="relative pt-16 pb-24 px-4 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -left-16 top-20 w-32 h-32 bg-google-red rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute right-10 top-40 w-24 h-24 bg-google-green rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute left-1/3 bottom-20 w-20 h-20 bg-google-yellow rounded-full opacity-20 animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 px-3 py-1 text-sm bg-google-blue text-white">Case Study Cheat Sheet</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {caseData.title}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {caseData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-google-blue hover:bg-blue-600" size="lg" onClick={() => document.getElementById('key-metrics')?.scrollIntoView({ behavior: 'smooth' })}>
                <BarChart className="mr-2 h-5 w-5" /> Explore Key Metrics
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('context')?.scrollIntoView({ behavior: 'smooth' })}>
                <BookOpen className="mr-2 h-5 w-5" /> Read Analysis
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <ArrowDownCircle className="h-10 w-10 text-google-blue animate-bounce" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-20">
        {/* Overview Section */}
        <Section title="Case Overview" id="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DataCard
              title="Problem Statement"
              content={
                <div>
                  <p className="text-lg font-medium mb-4">
                    How can Google Play adjust its 30% commission policy to maintain dominance in India while addressing developer backlash and regulatory threats?
                  </p>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-google-red text-white rounded-full w-7 h-7 flex items-center justify-center">1</span>
                      <span>High developer opposition to 30% commission labeled as "Google tax"</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-google-blue text-white rounded-full w-7 h-7 flex items-center justify-center">2</span>
                      <span>Threats of antitrust complaints to Competition Commission of India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-google-green text-white rounded-full w-7 h-7 flex items-center justify-center">3</span>
                      <span>Indian startups planning alternative app store with lower fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-google-yellow text-white rounded-full w-7 h-7 flex items-center justify-center">4</span>
                      <span>Indian government considering mandated national app store</span>
                    </div>
                  </div>
                </div>
              }
              icon={<Info className="h-5 w-5 text-google-blue" />}
              color="border-l-4 border-l-google-blue"
            />
            
            <DataCard
              title="Case Timeline"
              content={
                <div className="space-y-4">
                  <div className="relative pl-8 pb-4 border-l-2 border-gray-200">
                    <div className="absolute left-[-8px] top-0 bg-google-red rounded-full w-4 h-4"></div>
                    <p className="font-semibold">September 2020</p>
                    <p>Google announces enforcement of 30% commission on all in-app purchases</p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-gray-200">
                    <div className="absolute left-[-8px] top-0 bg-google-yellow rounded-full w-4 h-4"></div>
                    <p className="font-semibold">September 2020</p>
                    <p>Google removes Paytm from Play Store citing policy violations</p>
                  </div>
                  <div className="relative pl-8 pb-4 border-l-2 border-gray-200">
                    <div className="absolute left-[-8px] top-0 bg-google-blue rounded-full w-4 h-4"></div>
                    <p className="font-semibold">October 2020</p>
                    <p>Indian startups meet to discuss filing antitrust complaints</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-[-8px] top-0 bg-google-green rounded-full w-4 h-4"></div>
                    <p className="font-semibold">October 2020</p>
                    <p>Indian government contemplates national app store launch</p>
                  </div>
                </div>
              }
              icon={<LineChart className="h-5 w-5 text-google-blue" />}
              color="border-l-4 border-l-google-blue"
            />
          </div>
        </Section>
        
        {/* Key Metrics Section */}
        <Section title="Key Metrics" id="key-metrics">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseData.keyMetrics.map((metric, index) => (
              <KeyMetric
                key={index}
                title={metric.title}
                value={metric.value}
                description={metric.description}
                className={metric.color}
              />
            ))}
          </div>
          
          <div className="mt-12">
            <Tabs defaultValue="downloads">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="downloads">App Downloads</TabsTrigger>
                <TabsTrigger value="categories">App Categories</TabsTrigger>
                <TabsTrigger value="revenue">Revenue Projections</TabsTrigger>
              </TabsList>
              <TabsContent value="downloads" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Global App Downloads (billions)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Year</th>
                            <th className="border p-2 text-left">Google Play</th>
                            <th className="border p-2 text-left">App Store</th>
                            <th className="border p-2 text-left">Total</th>
                            <th className="border p-2 text-left">Global Total*</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseData.keyFigures[0].data.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="border p-2">{row.year}</td>
                              <td className="border p-2">{row.googlePlay}</td>
                              <td className="border p-2">{row.appStore}</td>
                              <td className="border p-2">{row.total}</td>
                              <td className="border p-2">{row.globalTotal}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">*Including Chinese third-party app downloads</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="categories" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">App Category Growth on Google Play (Q2 2019-2020)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Category</th>
                            <th className="border p-2 text-left">Q2 2019 (billions)</th>
                            <th className="border p-2 text-left">Q2 2020 (billions)</th>
                            <th className="border p-2 text-left">% Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseData.keyFigures[1].data.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="border p-2">{row.category}</td>
                              <td className="border p-2">{row.q2_2019}</td>
                              <td className="border p-2">{row.q2_2020}</td>
                              <td className="border p-2">
                                <Badge className={row.percentChange > 50 ? 'bg-green-500' : 'bg-blue-500'}>
                                  +{row.percentChange}%
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="revenue" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">App Revenue Projections ($ billions)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Year</th>
                            <th className="border p-2 text-left">Google Play</th>
                            <th className="border p-2 text-left">App Store</th>
                            <th className="border p-2 text-left">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseData.keyFigures[2].data.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="border p-2">{row.year}</td>
                              <td className="border p-2">${row.googlePlay}B</td>
                              <td className="border p-2">${row.appStore}B</td>
                              <td className="border p-2">${row.total}B</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Projected assuming 16.8% CAGR for 2020-2023</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </Section>
        
        {/* Contextual Analysis Section */}
        <Section title="Contextual Analysis" id="context">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <FloatingIsland color="bg-gradient-to-br from-case-blue to-case-lightBlue text-white" animationClass="animate-float">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5" /> {caseData.contextualAnalysis.company.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {caseData.contextualAnalysis.company.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              <Separator className="my-4 bg-white/20" />
              <div>
                <h4 className="font-semibold mb-2">So What?</h4>
                <p>{caseData.contextualAnalysis.company.implications}</p>
              </div>
            </FloatingIsland>
            
            <FloatingIsland color="bg-gradient-to-br from-case-red to-case-brightRed text-white" animationClass="animate-float-delay">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" /> {caseData.contextualAnalysis.market.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {caseData.contextualAnalysis.market.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              <Separator className="my-4 bg-white/20" />
              <div>
                <h4 className="font-semibold mb-2">So What?</h4>
                <p>{caseData.contextualAnalysis.market.implications}</p>
              </div>
            </FloatingIsland>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingIsland color="bg-gradient-to-br from-case-green to-case-brightGreen text-white" animationClass="animate-float-slow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BrainCircuit className="h-5 w-5" /> {caseData.contextualAnalysis.technology.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {caseData.contextualAnalysis.technology.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              <Separator className="my-4 bg-white/20" />
              <div>
                <h4 className="font-semibold mb-2">So What?</h4>
                <p>{caseData.contextualAnalysis.technology.implications}</p>
              </div>
            </FloatingIsland>
            
            <FloatingIsland color="bg-gradient-to-br from-case-purple to-case-brightPurple text-white" animationClass="animate-float">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5" /> {caseData.contextualAnalysis.competition.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {caseData.contextualAnalysis.competition.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              <Separator className="my-4 bg-white/20" />
              <div>
                <h4 className="font-semibold mb-2">So What?</h4>
                <p>{caseData.contextualAnalysis.competition.implications}</p>
              </div>
            </FloatingIsland>
            
            <FloatingIsland color="bg-gradient-to-br from-case-orange to-case-brightOrange text-white" animationClass="animate-float-delay">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5" /> {caseData.contextualAnalysis.regulation.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {caseData.contextualAnalysis.regulation.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold mt-1">•</span> {point}
                  </li>
                ))}
              </ul>
              <Separator className="my-4 bg-white/20" />
              <div>
                <h4 className="font-semibold mb-2">So What?</h4>
                <p>{caseData.contextualAnalysis.regulation.implications}</p>
              </div>
            </FloatingIsland>
          </div>
        </Section>
        
        {/* Network Effects Section */}
        <Section title="Network Effects" id="network-effects">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4 text-google-blue">{caseData.networkEffects.title}</h3>
            <p className="mb-6">{caseData.networkEffects.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {caseData.networkEffects.types.map((type, index) => (
                <Card key={index} className="border-t-4 border-t-google-blue">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">{type.type}</h4>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.examples.map((example, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="bg-google-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                            {i + 1}
                          </span>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3">Key Implications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseData.networkEffects.implications.map((implication, index) => (
                  <FactBox
                    key={index}
                    fact={implication}
                    color={
                      index === 0 ? "bg-google-blue" :
                      index === 1 ? "bg-google-red" :
                      index === 2 ? "bg-google-green" : "bg-google-yellow"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-google-blue">Network Effects Visualization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-4">Traditional Linear Business</h4>
                <div className="mb-4">
                  <p className="mb-2 font-medium">Cost per Unit vs Scale</p>
                  <div className="h-40 bg-white p-4 rounded flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-0 w-full h-full">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path 
                            d="M 0,80 Q 50,10 100,80" 
                            fill="none" 
                            stroke="#EA4335" 
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-0 w-full text-center text-xs text-gray-500">Scale</div>
                      <div className="absolute top-0 -left-16 h-full flex items-center text-xs text-gray-500 transform -rotate-90">Cost Per Unit</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Capacity Growth Cost</span>
                    <span className="text-red-500 font-medium">High</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-google-red" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Marginal Distribution Cost</span>
                    <span className="text-orange-500 font-medium">Medium</span>
                  </div>
                  <Progress value={50} className="h-2 bg-gray-200" indicatorClassName="bg-google-yellow" />
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-4">Platform Business (Google Play)</h4>
                <div className="mb-4">
                  <p className="mb-2 font-medium">Cost per Unit vs Scale</p>
                  <div className="h-40 bg-white p-4 rounded flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gray-300"></div>
                      <div className="absolute bottom-0 left-0 w-full h-full">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path 
                            d="M 0,30 Q 30,20 100,5" 
                            fill="none" 
                            stroke="#34A853" 
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 left-0 w-full text-center text-xs text-gray-500">Scale</div>
                      <div className="absolute top-0 -left-16 h-full flex items-center text-xs text-gray-500 transform -rotate-90">Cost Per Unit</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Capacity Growth Cost</span>
                    <span className="text-green-500 font-medium">Very Low</span>
                  </div>
                  <Progress value={15} className="h-2 bg-gray-200" indicatorClassName="bg-google-green" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Marginal Distribution Cost</span>
                    <span className="text-green-500 font-medium">Near Zero</span>
                  </div>
                  <Progress value={5} className="h-2 bg-gray-200" indicatorClassName="bg-google-blue" />
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Competition Law Section */}
        <Section title="Competition Law Framework" id="competition-law">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-google-blue">{caseData.competitionLaw.title}</h3>
            <p className="mb-6">{caseData.competitionLaw.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-google-blue">Factors Determining Dominance</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {caseData.competitionLaw.dominanceFactors.map((factor, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="bg-google-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          {index + 1}
                        </span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-google-red">Types of Abuse of Dominance</h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-4">
                    {caseData.competitionLaw.abuseTypes.map((type, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="bg-google-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          {index + 1}
                        </span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h4 className="font-bold text-lg mb-3 text-google-green">CCI Remedies</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-4">
                    {caseData.competitionLaw.remedies.map((remedy, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="bg-google-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                          {index + 1}
                        </span>
                        <span>{remedy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4">Essential Facilities Doctrine</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-l-4 border-l-google-blue">
                  <CardContent className="pt-6">
                    <h5 className="font-bold mb-2">Definition</h5>
                    <p>Infrastructure or facility necessary to access and compete in a market that cannot be easily reproduced or replaced.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-google-red">
                  <CardContent className="pt-6">
                    <h5 className="font-bold mb-2">Application</h5>
                    <p>Dominant enterprises controlling essential facilities cannot refuse to share with competitors without justification.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-google-green">
                  <CardContent className="pt-6">
                    <h5 className="font-bold mb-2">Google Play Case</h5>
                    <p>CCI could determine Play Store as essential facility requiring reasonable access terms for developers.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Strategic Recommendations Section */}
        <Section title="Strategic Recommendations" id="strategy">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-bold mb-6 text-google-blue">{caseData.strategies.title}</h3>
            
            <div className="space-y-8">
              {caseData.strategies.options.map((strategy, index) => (
                <Card key={index} className={`border-l-4 ${
                  index === 0 ? "border-l-google-blue" :
                  index === 1 ? "border-l-google-green" : "border-l-google-yellow"
                }`}>
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2">{strategy.name}</h4>
                    <p className="mb-4">{strategy.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-600">Pros</h5>
                        <ul className="space-y-1">
                          {strategy.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">+</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2 text-red-600">Cons</h5>
                        <ul className="space-y-1">
                          {strategy.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-red-600 font-bold">-</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-google-blue">Critical Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseData.criticalQuestions.map((question, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <span className="bg-google-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-0.5">
                    {index + 1}
                  </span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
        
        {/* Footer */}
        <footer className="mt-20 text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">Google Play in India: Interactive Case Study Cheat Sheet</p>
          <p className="text-sm text-gray-500 mt-2">Based on "Google Play in India: Playing with Networks" by Tulsi Jayakumar</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
