using Meetup.Feature.IdentityService.Models;
using Sitecore.Analytics;
using Sitecore.JavaScriptServices.Tracker.Pipelines.TrackEvent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Meetup.Feature.IdentityService.Processors
{
    public class IdentifyContact : TrackEventProcessor<Identity>
    {
        protected override void TrackEvent(ITracker tracker, TrackEventPipelineArgs args, Identity parsedEvent)
        {
            if (tracker == null)
            {

            }
                //args.Success = false;
        }
    }
}